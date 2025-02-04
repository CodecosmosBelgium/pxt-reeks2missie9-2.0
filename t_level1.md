### @hideIteration true
### @flyoutOnly true
# level 1
```blocks
player.onChat("level1", function () {
    CodeCosmos.setup_level1()
    agent.move(FORWARD, 2)
    agent.turn(RIGHT_TURN)
    agent.move(FORWARD, 4)
    CodeCosmos.collect_tool()
    for (let index = 0; index < 3; index++) {
        agent.turn(LEFT_TURN)
        agent.move(FORWARD, 2)
        agent.turn(RIGHT_TURN)
        agent.move(FORWARD, 2)
        CodeCosmos.collect_tool()
    }
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 2)
    agent.turn(RIGHT_TURN)
    agent.move(FORWARD, 4)
})

```

```template
player.onChat("level1", function () {
    CodeCosmos.setup_level1()
    
})
```

## Level 1

Use the learning platform to solve the exercise.
