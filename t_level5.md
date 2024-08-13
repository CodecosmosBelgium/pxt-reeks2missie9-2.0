### @hideIteration true
### @flyoutOnly true
# level 5
```blocks
player.onChat("level5", function () {
    CodeCosmos.setup_level5()
    for (let index = 0; index < 2; index++) {
        agent.move(FORWARD, 1)
        if (CodeCosmos.test_for_block_under_agent(STONE)) {
            CodeCosmos.place_podzol()
        } else if (CodeCosmos.test_for_block_under_agent(SAND)) {
            CodeCosmos.spawn_parrot()
        } else if (CodeCosmos.test_for_block_under_agent(GRASS) && CodeCosmos.next_to_bamboo_block()) {
            CodeCosmos.spawn_panda()
        } else if (CodeCosmos.pickaxe_and_diamond_under_agent()) {
            CodeCosmos.collect_pickaxe_and_diamond()
        }
    }
    agent.turn(RIGHT_TURN)
    for (let index = 0; index < 9; index++) {
        agent.move(FORWARD, 1)
        if (CodeCosmos.test_for_block_under_agent(STONE)) {
            CodeCosmos.place_podzol()
        } else if (CodeCosmos.test_for_block_under_agent(SAND)) {
            CodeCosmos.spawn_parrot()
        } else if (CodeCosmos.test_for_block_under_agent(GRASS) && CodeCosmos.next_to_bamboo_block()) {
            CodeCosmos.spawn_panda()
        } else if (CodeCosmos.pickaxe_and_diamond_under_agent()) {
            CodeCosmos.collect_pickaxe_and_diamond()
        }
    }
    agent.turn(LEFT_TURN)
    for (let index = 0; index < 13; index++) {
        agent.move(FORWARD, 1)
        if (CodeCosmos.test_for_block_under_agent(STONE)) {
            CodeCosmos.place_podzol()
        } else if (CodeCosmos.test_for_block_under_agent(SAND)) {
            CodeCosmos.spawn_parrot()
        } else if (CodeCosmos.test_for_block_under_agent(GRASS) && CodeCosmos.next_to_bamboo_block()) {
            CodeCosmos.spawn_panda()
        } else if (CodeCosmos.pickaxe_and_diamond_under_agent()) {
            CodeCosmos.collect_pickaxe_and_diamond()
        }
    }
    agent.turn(LEFT_TURN)
    for (let index = 0; index < 9; index++) {
        agent.move(FORWARD, 1)
        if (CodeCosmos.test_for_block_under_agent(STONE)) {
            CodeCosmos.place_podzol()
        } else if (CodeCosmos.test_for_block_under_agent(SAND)) {
            CodeCosmos.spawn_parrot()
        } else if (CodeCosmos.test_for_block_under_agent(GRASS) && CodeCosmos.next_to_bamboo_block()) {
            CodeCosmos.spawn_panda()
        } else if (CodeCosmos.pickaxe_and_diamond_under_agent()) {
            CodeCosmos.collect_pickaxe_and_diamond()
        }
    }
})
```

```template
player.onChat("level5", function () {
    CodeCosmos.setup_level5()
    for (let index = 0; index < 2; index++) {
        agent.move(FORWARD, 1)
        if (CodeCosmos.test_for_block_under_agent(STONE)) {
            CodeCosmos.place_podzol()
        } else if (CodeCosmos.test_for_block_under_agent(SAND)) {
            CodeCosmos.spawn_parrot()
        } else if (CodeCosmos.test_for_block_under_agent(GRASS) && CodeCosmos.next_to_bamboo_block()) {
            CodeCosmos.spawn_panda()
        } else if (CodeCosmos.pickaxe_and_diamond_under_agent()) {
            CodeCosmos.collect_pickaxe_and_diamond()
        }
    }
    agent.turn(RIGHT_TURN)
    for (let index = 0; index < 9; index++) {
        agent.move(FORWARD, 1)
        if (CodeCosmos.test_for_block_under_agent(STONE)) {
            CodeCosmos.place_podzol()
        } else if (CodeCosmos.test_for_block_under_agent(SAND)) {
            CodeCosmos.spawn_parrot()
        } else if (CodeCosmos.test_for_block_under_agent(GRASS) && CodeCosmos.next_to_bamboo_block()) {
            CodeCosmos.spawn_panda()
        } else if (CodeCosmos.pickaxe_and_diamond_under_agent()) {
            CodeCosmos.collect_pickaxe_and_diamond()
        }
    }
    agent.turn(LEFT_TURN)
    for (let index = 0; index < 13; index++) {
        agent.move(FORWARD, 1)
        if (CodeCosmos.test_for_block_under_agent(STONE)) {
            CodeCosmos.place_podzol()
        } else if (CodeCosmos.test_for_block_under_agent(SAND)) {
            CodeCosmos.spawn_parrot()
        } else if (CodeCosmos.test_for_block_under_agent(GRASS) && CodeCosmos.next_to_bamboo_block()) {
            CodeCosmos.spawn_panda()
        } else if (CodeCosmos.pickaxe_and_diamond_under_agent()) {
            CodeCosmos.collect_pickaxe_and_diamond()
        }
    }
    agent.turn(LEFT_TURN)
    for (let index = 0; index < 9; index++) {
        agent.move(FORWARD, 1)
        if (CodeCosmos.test_for_block_under_agent(STONE)) {
            CodeCosmos.place_podzol()
        } else if (CodeCosmos.test_for_block_under_agent(SAND)) {
            CodeCosmos.spawn_parrot()
        } else if (CodeCosmos.test_for_block_under_agent(GRASS) && CodeCosmos.next_to_bamboo_block()) {
            CodeCosmos.spawn_panda()
        } else if (CodeCosmos.pickaxe_and_diamond_under_agent()) {
            CodeCosmos.collect_pickaxe_and_diamond()
        }
    }
})
```

## Level 5

Use the learning platform to solve the exercise.
