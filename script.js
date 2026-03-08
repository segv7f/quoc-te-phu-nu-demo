const canvas = document.getElementById("background")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let particles = []

class Particle{

constructor(){
this.x = Math.random()*canvas.width
this.y = Math.random()*canvas.height
this.size = Math.random()*2+1
this.speedY = Math.random()*0.5+0.2
this.opacity = Math.random()
}

update(){
this.y -= this.speedY
if(this.y < 0){
this.y = canvas.height
}
}

draw(){
ctx.fillStyle = "rgba(255,200,220,"+this.opacity+")"
ctx.beginPath()
ctx.arc(this.x,this.y,this.size,0,Math.PI*2)
ctx.fill()
}

}

for(let i=0;i<150;i++){
particles.push(new Particle())
}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height)

particles.forEach(p=>{
p.update()
p.draw()
})

requestAnimationFrame(animate)

}

animate()



// parallax effect

document.addEventListener("mousemove",e=>{

let x = (e.clientX/window.innerWidth)-0.5
let y = (e.clientY/window.innerHeight)-0.5

document.querySelectorAll(".photo").forEach(el=>{

el.style.transform =
`rotateY(${x*20}deg) rotateX(${-y*20}deg)`

})

})