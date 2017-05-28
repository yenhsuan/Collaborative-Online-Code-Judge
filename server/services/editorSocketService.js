let redisClient = require('../modules/redisClient');

const TIMEOUT_IN_SECONDS = 3600;
const sessionPath = '/ojServer/';

module.exports = (io) => {

	let collaborationSessions=[]; 
	let socketIdSessionIdMap=[];

	io.on('connection', (socket)=>{

		// Get session id from query
		let sessionId = socket.handshake.query['sessionId'];
		socketIdSessionIdMap[socket.id] = sessionId;

		// if ( ! (sessionId in collaborationSessions)) {
		// 	collaborationSessions[sessionId] = {
		// 		users:[]
		// 	};			
		// }

		// collaborationSessions[sessionId]['users'].push(socket.id);
		//


		if (sessionId in collaborationSessions) {
			collaborationSessions[sessionId]['users'].push(socket.id);

					let usersInTheRoom = collaborationSessions[sessionId]['users'];

					for (let i=0; i<usersInTheRoom.length; i++) {
								
						
							console.log('SEND: USERS NUM');
							io.to(usersInTheRoom[i]).emit('userNum',""+usersInTheRoom.length);
						
					}


		} else {

			redisClient.get(sessionPath+sessionId, (data)=>{

				if (data) {

					console.log('pull back contents');
					collaborationSessions[sessionId] = {
						users:[],
						contents: JSON.parse(data)
					};
				}
				else {
					console.log('no contents in cache');
					collaborationSessions[sessionId] = {
						users:[],
						contents: []
					};
				}

				collaborationSessions[sessionId]['users'].push(socket.id);

				let usersInTheRoom = collaborationSessions[sessionId]['users'];

				for (let i=0; i<usersInTheRoom.length; i++) {
							
						console.log('SEND: USERS NUM');
						io.to(usersInTheRoom[i]).emit('userNum',""+usersInTheRoom.length);
					
				}


			});
		}

		// Boradcast number of users






		// Server listens text-changes from clients
		//   -> Broadcast the changes to all clients

		socket.on('change', (delta)=>{

			console.log('change:' + socketIdSessionIdMap[socket.id] + ' ' + delta );
			let sessionIdReceived = socketIdSessionIdMap[socket.id];

			if (sessionIdReceived in collaborationSessions) {

				collaborationSessions[sessionIdReceived]['contents'].push(['change',delta,Date.now()]);

				let users = collaborationSessions[sessionIdReceived]['users'];

				for (let i=0; i<users.length; i++) {
					
					if ( socket.id != users[i] ) {
						console.log('SEND!'+ users[i] + '   ' +socket.id+ '  '+sessionIdReceived + '' );
						console.log(users[i]);
						io.to(users[i]).emit('change',delta);
					}
				}
			}
			else {
				console.log('error');
			}
		});


		// Server listens cursor-changes from clients
		//   -> Broadcast the cursor-changes to all clients
		socket.on('cursor', (curMove)=> {

			console.log('cursor change:' + socketIdSessionIdMap[socket.id] + ' ' + curMove );
			
			curMove = JSON.parse(curMove);
			curMove['socketId']= socket.id;

			let sessionIdReceived = socketIdSessionIdMap[socket.id];
			if (sessionIdReceived in collaborationSessions) {

				let users = collaborationSessions[sessionIdReceived]['users'];

				for (let i=0; i<users.length; i++) {
					
					if ( socket.id != users[i] ) {
						//console.log('SEND!'+ users[i] + '   ' +socket.id+ '  '+sessionIdReceived + '' );
						//console.log(users[i]);
						
						io.to(users[i]).emit('cursor', JSON.stringify(curMove) );
					}
				}
			}
			else {
				console.log('error');
			}
		});






		// Server listens get-editor-content
		socket.on('getContent',()=>{
			//let sessionIdReceived = socketIdSessionIdMap[socket.id];
			if (sessionId in collaborationSessions) {
				let contents = collaborationSessions[sessionId]['contents'];
				for (let i=0; i<contents.length; i++) {

					io.to(socket.id).emit(contents[i][0],contents[i][1]);

				} 
			}
		});


		socket.on('disconnect',()=>{

			console.log(`socket:${socket.id} disconnected!`);

			if (sessionId in collaborationSessions) {

				let users = collaborationSessions[sessionId]['users'];
				let idx = users.indexOf(socket.id);

				if (idx != -1) {
					users.splice(idx,1);
				}

				let usersInTheRoom = collaborationSessions[sessionId]['users'];
				for (let i=0; i<usersInTheRoom.length; i++) {
								
					console.log('SEND: USERS NUM');
					io.to(usersInTheRoom[i]).emit('userNum',""+usersInTheRoom.length);
						
				}

				if (users.length==0) {
					console.log('Contents were saved into Redis');
					let key = sessionPath+sessionId;
					let val = JSON.stringify(collaborationSessions[sessionId]['contents']);

					redisClient.set(key,val,()=>{});
					redisClient.expire(key,TIMEOUT_IN_SECONDS);
					delete collaborationSessions[sessionId];

				}
			}
		});

	});
};