import express from "express";
import {Server} from "socket.io";




const app = express()
const PORT = 5000

// const io = new Server(8000,{
//     cors: true,
// })


app.get("/home",(req,res)=>{
    res.send("working")
})


// io.on("connection", (socket) => {
// 	socket.emit("me", socket.id);

// 	socket.on("disconnect", () => {
// 		socket.broadcast.emit("callEnded")
// 	});

// 	socket.on("callUser", ({ userToCall, signalData, from, name }) => {
//         // console.log("aaa");
// 		io.to(userToCall).emit("callUser", { signal: signalData, from, name });
// 	});

// 	socket.on("answerCall", (data) => {
// 		io.to(data.to).emit("callAccepted", data.signal)
// 	});
// });


app.listen(PORT,()=>{
    console.log(`Listening on ${PORT}`);
})


