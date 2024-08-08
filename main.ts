player.onChat("level2", function () {
    CodeCosmos.setup_level2()
    for (let index = 0; index < 6; index++) {
        agent.move(FORWARD, 1)
        if (CodeCosmos.test_for_block_under_agent(GRASS) || CodeCosmos.test_for_block_under_agent(PODZOL)) {
            CodeCosmos.place_tree()
        } else {
            CodeCosmos.place_bush()
        }
        agent.turn(RIGHT_TURN)
        agent.move(FORWARD, 1)
        if (CodeCosmos.test_for_block_under_agent(GRASS) || CodeCosmos.test_for_block_under_agent(PODZOL)) {
            CodeCosmos.place_tree()
        } else {
            CodeCosmos.place_bush()
        }
        agent.turn(LEFT_TURN)
    }
    agent.turn(RIGHT_TURN)
    for (let index = 0; index < 5; index++) {
        agent.move(FORWARD, 1)
        if (CodeCosmos.test_for_block_under_agent(GRASS) || CodeCosmos.test_for_block_under_agent(PODZOL)) {
            CodeCosmos.place_tree()
        } else {
            CodeCosmos.place_bush()
        }
    }
    for (let index = 0; index < 2; index++) {
        agent.move(FORWARD, 1)
        if (CodeCosmos.test_for_block_under_agent(GRASS) || CodeCosmos.test_for_block_under_agent(PODZOL)) {
            CodeCosmos.place_tree()
        } else {
            CodeCosmos.place_bush()
        }
        agent.turn(LEFT_TURN)
        agent.move(FORWARD, 1)
        if (CodeCosmos.test_for_block_under_agent(GRASS) || CodeCosmos.test_for_block_under_agent(PODZOL)) {
            CodeCosmos.place_tree()
        } else {
            CodeCosmos.place_bush()
        }
        agent.turn(RIGHT_TURN)
    }
    agent.move(FORWARD, 1)
    if (CodeCosmos.test_for_block_under_agent(GRASS) || CodeCosmos.test_for_block_under_agent(PODZOL)) {
        CodeCosmos.place_tree()
    } else {
        CodeCosmos.place_bush()
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
    agent.turn(RIGHT_TURN)
    agent.move(FORWARD, 1)
    if (CodeCosmos.test_for_block_under_agent(GRASS) || CodeCosmos.test_for_block_under_agent(PODZOL)) {
        CodeCosmos.place_tree()
    } else {
        CodeCosmos.place_bush()
    }
})
player.onChat("level1", function () {
    CodeCosmos.setup_level1()
    for (let index = 0; index < 4; index++) {
        agent.move(FORWARD, 2)
        agent.turn(RIGHT_TURN)
        agent.move(FORWARD, 3)
        CodeCosmos.collect_tool()
        agent.move(BACK, 1)
        agent.turn(LEFT_TURN)
    }
    agent.move(FORWARD, 2)
    agent.turn(RIGHT_TURN)
    agent.move(FORWARD, 5)
    agent.turn(RIGHT_TURN)
    agent.move(FORWARD, 2)
    CodeCosmos.collect_tool()
    agent.move(BACK, 2)
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 1)
})
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
