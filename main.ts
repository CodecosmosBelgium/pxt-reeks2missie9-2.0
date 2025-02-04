player.onChat("level2", function () {
    CodeCosmos.setup_level2()
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
            CodeCosmos.turn_360_degrees()
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
            CodeCosmos.turn_360_degrees()
        }
    }
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
            CodeCosmos.turn_360_degrees()
        }
    }
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
    agent.move(FORWARD, 1)
})
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
player.onChat("level3", function () {
    CodeCosmos.setup_level3()
    for (let index = 0; index < 6; index++) {
        agent.move(FORWARD, 1)
        if (CodeCosmos.test_for_block_under_agent(GRASS) && CodeCosmos.next_to_bamboo()) {
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
        if (CodeCosmos.test_for_block_under_agent(GRASS) && CodeCosmos.next_to_bamboo()) {
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
        if (CodeCosmos.test_for_block_under_agent(GRASS) && CodeCosmos.next_to_bamboo()) {
            CodeCosmos.spawn_panda()
        } else if (CodeCosmos.test_for_block_under_agent(MAGMA_BLOCK)) {
            CodeCosmos.place_cobblestone()
        } else {
            CodeCosmos.place_bush()
        }
    }
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 1)
    if (CodeCosmos.test_for_block_under_agent(GRASS) && CodeCosmos.next_to_bamboo()) {
        CodeCosmos.spawn_panda()
    } else if (CodeCosmos.test_for_block_under_agent(MAGMA_BLOCK)) {
        CodeCosmos.place_cobblestone()
    } else {
        CodeCosmos.place_bush()
    }
    agent.move(FORWARD, 1)
})
player.onChat("level5", function () {
    CodeCosmos.setup_level5()
    for (let index = 0; index < 2; index++) {
        agent.move(FORWARD, 1)
        if (CodeCosmos.test_for_block_under_agent(STONE)) {
            CodeCosmos.place_podzol()
        } else if (CodeCosmos.test_for_block_under_agent(SAND)) {
            CodeCosmos.spawn_parrot()
        } else if (CodeCosmos.test_for_block_under_agent(GRASS) && CodeCosmos.next_to_bamboo()) {
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
        } else if (CodeCosmos.test_for_block_under_agent(GRASS) && CodeCosmos.next_to_bamboo()) {
            CodeCosmos.spawn_panda()
        } else if (CodeCosmos.pickaxe_and_diamond_under_agent()) {
            CodeCosmos.collect_pickaxe_and_diamond()
        }
    }
    agent.turn(LEFT_TURN)
    for (let index = 0; index < 6; index++) {
        agent.move(FORWARD, 1)
        if (CodeCosmos.test_for_block_under_agent(STONE)) {
            CodeCosmos.place_podzol()
        } else if (CodeCosmos.test_for_block_under_agent(SAND)) {
            CodeCosmos.spawn_parrot()
        } else if (CodeCosmos.test_for_block_under_agent(GRASS) && CodeCosmos.next_to_bamboo()) {
            CodeCosmos.spawn_panda()
        } else if (CodeCosmos.pickaxe_and_diamond_under_agent()) {
            CodeCosmos.collect_pickaxe_and_diamond()
        }
    }
    agent.turn(LEFT_TURN)
    for (let index = 0; index < 3; index++) {
        agent.move(FORWARD, 1)
        if (CodeCosmos.test_for_block_under_agent(STONE)) {
            CodeCosmos.place_podzol()
        } else if (CodeCosmos.test_for_block_under_agent(SAND)) {
            CodeCosmos.spawn_parrot()
        } else if (CodeCosmos.test_for_block_under_agent(GRASS) && CodeCosmos.next_to_bamboo()) {
            CodeCosmos.spawn_panda()
        } else if (CodeCosmos.pickaxe_and_diamond_under_agent()) {
            CodeCosmos.collect_pickaxe_and_diamond()
        }
    }
    agent.turn(RIGHT_TURN)
    for (let index = 0; index < 4; index++) {
        agent.move(FORWARD, 1)
        if (CodeCosmos.test_for_block_under_agent(STONE)) {
            CodeCosmos.place_podzol()
        } else if (CodeCosmos.test_for_block_under_agent(SAND)) {
            CodeCosmos.spawn_parrot()
        } else if (CodeCosmos.test_for_block_under_agent(GRASS) && CodeCosmos.next_to_bamboo()) {
            CodeCosmos.spawn_panda()
        } else if (CodeCosmos.pickaxe_and_diamond_under_agent()) {
            CodeCosmos.collect_pickaxe_and_diamond()
        }
    }
    agent.turn(RIGHT_TURN)
    for (let index = 0; index < 2; index++) {
        agent.move(FORWARD, 1)
        if (CodeCosmos.test_for_block_under_agent(STONE)) {
            CodeCosmos.place_podzol()
        } else if (CodeCosmos.test_for_block_under_agent(SAND)) {
            CodeCosmos.spawn_parrot()
        } else if (CodeCosmos.test_for_block_under_agent(GRASS) && CodeCosmos.next_to_bamboo()) {
            CodeCosmos.spawn_panda()
        } else if (CodeCosmos.pickaxe_and_diamond_under_agent()) {
            CodeCosmos.collect_pickaxe_and_diamond()
        }
    }
    agent.turn(LEFT_TURN)
    for (let index = 0; index < 3; index++) {
        agent.move(FORWARD, 1)
        if (CodeCosmos.test_for_block_under_agent(STONE)) {
            CodeCosmos.place_podzol()
        } else if (CodeCosmos.test_for_block_under_agent(SAND)) {
            CodeCosmos.spawn_parrot()
        } else if (CodeCosmos.test_for_block_under_agent(GRASS) && CodeCosmos.next_to_bamboo()) {
            CodeCosmos.spawn_panda()
        } else if (CodeCosmos.pickaxe_and_diamond_under_agent()) {
            CodeCosmos.collect_pickaxe_and_diamond()
        }
    }
    agent.turn(LEFT_TURN)
    for (let index = 0; index < 7; index++) {
        agent.move(FORWARD, 1)
        if (CodeCosmos.test_for_block_under_agent(STONE)) {
            CodeCosmos.place_podzol()
        } else if (CodeCosmos.test_for_block_under_agent(SAND)) {
            CodeCosmos.spawn_parrot()
        } else if (CodeCosmos.test_for_block_under_agent(GRASS) && CodeCosmos.next_to_bamboo()) {
            CodeCosmos.spawn_panda()
        } else if (CodeCosmos.pickaxe_and_diamond_under_agent()) {
            CodeCosmos.collect_pickaxe_and_diamond()
        }
    }
    agent.move(FORWARD, 1)
})
