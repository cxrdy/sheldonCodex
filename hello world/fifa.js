canvas = document.querySelector('canvas')
canvas.width = 1024
canvas.height = 576

c = canvas.getContext('2d')

c.fillStyle = 'black'
c.fillRect(0,0,canvas.width,canvas.height)
c.fillStyle = 'red'
c.fillRect(0,0,100,200)
c.fillStyle = 'blue'
c.fillRect(500,0,100,200)