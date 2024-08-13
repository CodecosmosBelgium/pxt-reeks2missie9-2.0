### @hideIteration true
### @flyoutOnly true
# level 4
```blocks
player.onChat("level4", function () {
    CodeCosmos.setup_level4()
    for (let index = 0; index < 3; index++) {
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
            for (let index = 0; index < 4; index++) {
                agent.turn(LEFT_TURN)
            }
        }
    }
    for (let index = 0; index < 4; index++) {
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
            for (let index = 0; index < 4; index++) {
                agent.turn(LEFT_TURN)
            }
        }
    }
    for (let index = 0; index < 1; index++) {
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
            for (let index = 0; index < 4; index++) {
                agent.turn(LEFT_TURN)
            }
        }
    }
    agent.turn(LEFT_TURN)
    for (let index = 0; index < 3; index++) {
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
            for (let index = 0; index < 4; index++) {
                agent.turn(LEFT_TURN)
            }
        }
    }
    for (let index = 0; index < 9; index++) {
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
            for (let index = 0; index < 4; index++) {
                agent.turn(LEFT_TURN)
            }
        }
    }
})
```

```template
player.onChat("level4", function () {
    CodeCosmos.setup_level4()
    
})
```

## Level 4

Use the learning platform to solve the exercise.
