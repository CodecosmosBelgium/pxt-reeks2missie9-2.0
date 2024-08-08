### @hideIteration true
### @flyoutOnly true
# level 3
```blocks
player.onChat("level3", function () {
    CodeCosmos.setup_level3()
    for (let index = 0; index < 6; index++) {
        agent.move(FORWARD, 1)
        if (CodeCosmos.test_for_block_under_agent(GRASS) && CodeCosmos.next_to_bamboo_plant()) {
            CodeCosmos.spawn_panda()
        } else if (CodeCosmos.test_for_block_under_agent(MAGMA_BLOCK)) {
            CodeCosmos.place_cobblestone()
        } else {
            CodeCosmos.place_bush()
        }
    }
    agent.turn(RIGHT_TURN)
    for (let index = 0; index < 2; index++) {
        agent.move(FORWARD, 1)
        if (CodeCosmos.test_for_block_under_agent(GRASS) && CodeCosmos.next_to_bamboo_plant()) {
            CodeCosmos.spawn_panda()
        } else if (CodeCosmos.test_for_block_under_agent(MAGMA_BLOCK)) {
            CodeCosmos.place_cobblestone()
        } else {
            CodeCosmos.place_bush()
        }
    }
    agent.turn(LEFT_TURN)
    for (let index = 0; index < 9; index++) {
        agent.move(FORWARD, 1)
        if (CodeCosmos.test_for_block_under_agent(GRASS) && CodeCosmos.next_to_bamboo_plant()) {
            CodeCosmos.spawn_panda()
        } else if (CodeCosmos.test_for_block_under_agent(MAGMA_BLOCK)) {
            CodeCosmos.place_cobblestone()
        } else {
            CodeCosmos.place_bush()
        }
    }
    agent.turn(LEFT_TURN)
    for (let index = 0; index < 2; index++) {
        agent.move(FORWARD, 1)
        if (CodeCosmos.test_for_block_under_agent(GRASS) && CodeCosmos.next_to_bamboo_plant()) {
            CodeCosmos.spawn_panda()
        } else if (CodeCosmos.test_for_block_under_agent(MAGMA_BLOCK)) {
            CodeCosmos.place_cobblestone()
        } else {
            CodeCosmos.place_bush()
        }
    }
})

```

```template
player.onChat("level3", function () {
    CodeCosmos.setup_level3()
    for (let index = 0; index < 6; index++) {
        agent.move(FORWARD, 1)
        if (CodeCosmos.test_for_block_under_agent(GRASS) && CodeCosmos.next_to_bamboo_plant()) {
            CodeCosmos.spawn_panda()
        } else if (CodeCosmos.test_for_block_under_agent(MAGMA_BLOCK)) {
            CodeCosmos.place_cobblestone()
        } else {
            CodeCosmos.place_bush()
        }
    }
    agent.turn(RIGHT_TURN)
    for (let index = 0; index < 2; index++) {
        agent.move(FORWARD, 1)
        if (CodeCosmos.test_for_block_under_agent(GRASS) && CodeCosmos.next_to_bamboo_plant()) {
            CodeCosmos.spawn_panda()
        } else if (CodeCosmos.test_for_block_under_agent(MAGMA_BLOCK)) {
            CodeCosmos.place_cobblestone()
        } else {
            CodeCosmos.place_bush()
        }
    }
    agent.turn(LEFT_TURN)
    for (let index = 0; index < 9; index++) {
        agent.move(FORWARD, 1)
        if (CodeCosmos.test_for_block_under_agent(GRASS) && CodeCosmos.next_to_bamboo_plant()) {
            CodeCosmos.spawn_panda()
        } else if (CodeCosmos.test_for_block_under_agent(MAGMA_BLOCK)) {
            CodeCosmos.place_cobblestone()
        } else {
            CodeCosmos.place_bush()
        }
    }
    agent.turn(LEFT_TURN)
    for (let index = 0; index < 2; index++) {
        agent.move(FORWARD, 1)
        if (CodeCosmos.test_for_block_under_agent(GRASS) && CodeCosmos.next_to_bamboo_plant()) {
            CodeCosmos.spawn_panda()
        } else if (CodeCosmos.test_for_block_under_agent(MAGMA_BLOCK)) {
            CodeCosmos.place_cobblestone()
        } else {
            CodeCosmos.place_bush()
        }
    }
})
```

## Level 3

Use the learning platform to solve the exercise.
