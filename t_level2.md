### @hideIteration true
### @flyoutOnly true
# level 2
```blocks
player.onChat("level2", function () {
    CodeCosmos.setup_level3()
    CodeCosmos.spawn_panda()
    agent.turn(RIGHT_TURN)
    for (let index = 0; index < 6; index++) {
        agent.move(FORWARD, 1)
        if (CodeCosmos.test_for_block_under_agent(GRASS) || CodeCosmos.test_for_block_under_agent(PODZOL)) {
            CodeCosmos.place_tree()
        } else {
            CodeCosmos.place_bush()
        }
    }
    agent.turn(LEFT_TURN)
    for (let index = 0; index < 5; index++) {
        agent.move(FORWARD, 1)
        if (CodeCosmos.test_for_block_under_agent(GRASS) || CodeCosmos.test_for_block_under_agent(PODZOL)) {
            CodeCosmos.place_tree()
        } else {
            CodeCosmos.place_bush()
        }
    }
    for (let index = 0; index < 4; index++) {
        agent.move(RIGHT, 1)
        if (CodeCosmos.test_for_block_under_agent(GRASS) || CodeCosmos.test_for_block_under_agent(PODZOL)) {
            CodeCosmos.place_tree()
        } else {
            CodeCosmos.place_bush()
        }
        agent.move(FORWARD, 1)
        if (CodeCosmos.test_for_block_under_agent(GRASS) || CodeCosmos.test_for_block_under_agent(PODZOL)) {
            CodeCosmos.place_tree()
        } else {
            CodeCosmos.place_bush()
        }
    }
    agent.turn(RIGHT_TURN)
    for (let index = 0; index < 2; index++) {
        agent.move(FORWARD, 1)
        if (CodeCosmos.test_for_block_under_agent(GRASS) || CodeCosmos.test_for_block_under_agent(PODZOL)) {
            CodeCosmos.place_tree()
        } else {
            CodeCosmos.place_bush()
        }
    }
    agent.turn(LEFT_TURN)
    for (let index = 0; index < 2; index++) {
        agent.move(FORWARD, 1)
        if (CodeCosmos.test_for_block_under_agent(GRASS) || CodeCosmos.test_for_block_under_agent(PODZOL)) {
            CodeCosmos.place_tree()
        } else {
            CodeCosmos.place_bush()
        }
    }
    agent.turn(RIGHT_TURN)
    for (let index = 0; index < 2; index++) {
        agent.move(FORWARD, 1)
        if (CodeCosmos.test_for_block_under_agent(GRASS) || CodeCosmos.test_for_block_under_agent(PODZOL)) {
            CodeCosmos.place_tree()
        } else {
            CodeCosmos.place_bush()
        }
    }
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 1)
    if (CodeCosmos.test_for_block_under_agent(GRASS) || CodeCosmos.test_for_block_under_agent(PODZOL)) {
        CodeCosmos.place_tree()
    } else {
        CodeCosmos.place_bush()
    }
    agent.move(FORWARD, 1)
})
```

```template
player.onChat("level2", function () {
    CodeCosmos.setup_level3()
    
})
```

## Level 2

Use the learning platform to solve the exercise.
