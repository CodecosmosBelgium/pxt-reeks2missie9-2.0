### @hideIteration true
### @flyoutOnly true
# level 4
```blocks
player.onChat("level4", function () {
    // CodeCosmos.setup_level4()
    for (let index = 0; index < 8; index++) {
        agent.move(FORWARD, 1)
        if (CodeCosmos.no_ironblock_under_agent() && CodeCosmos.next_to_tree()) {
            CodeCosmos.spawn_parrot()
        } else if (CodeCosmos.torch_infrontof_agent()) {
            agent.turn(RIGHT_TURN)
        } else if (CodeCosmos.fence_infrontof_agent()) {
            agent.turn(LEFT_TURN)
        } else if (CodeCosmos.test_for_block_under_agent(GRASS) && CodeCosmos.next_to_bush()) {
            CodeCosmos.spawn_ocelot()
        } else {
            CodeCosmos.turn_360_degrees()
        }
    }
    agent.turn(LEFT_TURN)
    for (let index = 0; index < 12; index++) {
        agent.move(FORWARD, 1)
        if (CodeCosmos.no_ironblock_under_agent() && CodeCosmos.next_to_tree()) {
            CodeCosmos.spawn_parrot()
        } else if (CodeCosmos.torch_infrontof_agent()) {
            agent.turn(RIGHT_TURN)
        } else if (CodeCosmos.fence_infrontof_agent()) {
            agent.turn(LEFT_TURN)
        } else if (CodeCosmos.test_for_block_under_agent(GRASS) && CodeCosmos.next_to_bush()) {
            CodeCosmos.spawn_ocelot()
        } else {
            CodeCosmos.turn_360_degrees()
        }
    }
})
```

```template
player.onChat("level4", function () {
    // CodeCosmos.setup_level4()
    for (let index = 0; index < 8; index++) {
        agent.move(FORWARD, 1)
        if (CodeCosmos.no_ironblock_under_agent() && CodeCosmos.next_to_tree()) {
            CodeCosmos.spawn_parrot()
        } else if (CodeCosmos.torch_infrontof_agent()) {
            agent.turn(RIGHT_TURN)
        } else if (CodeCosmos.fence_infrontof_agent()) {
            agent.turn(LEFT_TURN)
        } else if (CodeCosmos.test_for_block_under_agent(GRASS) && CodeCosmos.next_to_bush()) {
            CodeCosmos.spawn_ocelot()
        } else {
            CodeCosmos.turn_360_degrees()
        }
    }
    agent.turn(LEFT_TURN)
    for (let index = 0; index < 12; index++) {
        agent.move(FORWARD, 1)
        if (CodeCosmos.no_ironblock_under_agent() && CodeCosmos.next_to_tree()) {
            CodeCosmos.spawn_parrot()
        } else if (CodeCosmos.torch_infrontof_agent()) {
            agent.turn(RIGHT_TURN)
        } else if (CodeCosmos.fence_infrontof_agent()) {
            agent.turn(LEFT_TURN)
        } else if (CodeCosmos.test_for_block_under_agent(GRASS) && CodeCosmos.next_to_bush()) {
            CodeCosmos.spawn_ocelot()
        } else {
            CodeCosmos.turn_360_degrees()
        }
    }
})
```

## Level 4

Use the learning platform to solve the exercise.
