class Form{
    constructor(){
    }
    display(){
        var title = createElement('h2')
        title.html("Car Racing Game")
        title.position(350,0)

        var input = createInput("Name")
        var button = createButton("PLAY")
        input.position(460,160)
        button.position(520,200)

        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name = input.value()
            var greeting = createElement("h3")
            greeting.position(130,160);
            greeting.html("Hello"+name)
        })
    }
}