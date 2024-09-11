### @hideIteration true
### @flyoutOnly true
# level 1
```blocks
player.onChat("level1", function () {
    CodeCosmos.setup_level1()
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 2; index++) {
            agent.move(FORWARD, 1)
        }
        agent.turn(RIGHT_TURN)
        for (let index = 0; index < 4; index++) {
            agent.move(FORWARD, 1)
        }
        CodeCosmos.collect_tool()
        for (let index = 0; index < 2; index++) {
            agent.move(BACK, 1)
        }
        agent.turn(LEFT_TURN)
    }
    agent.move(FORWARD, 2)
    agent.turn(RIGHT_TURN)
    agent.move(FORWARD, 6)
})

```

```template
player.onChat("level1", function () {
    CodeCosmos.setup_level1()
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 2; index++) {
            agent.move(FORWARD, 1)
        }
        agent.turn(RIGHT_TURN)
        for (let index = 0; index < 4; index++) {
            agent.move(FORWARD, 1)
        }
        CodeCosmos.collect_tool()
        for (let index = 0; index < 2; index++) {
            agent.move(BACK, 1)
        }
        agent.turn(LEFT_TURN)
    }
    agent.move(FORWARD, 2)
    agent.turn(RIGHT_TURN)
    agent.move(FORWARD, 6)
})
```

## Level 1

Use the learning platform to solve the exercise.
