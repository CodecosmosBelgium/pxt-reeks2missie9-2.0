player.execute("/scriptevent cc:getId " + mobs.queryTarget((mobs.target(MY_AGENT)))[0].uniqueId)

/**
 * Custom blocks
 */
//% color=190 weight=100 block="CodeCosmos"
namespace CodeCosmos {

    //% block="Collect tool under agent"
    export function collect_tool(): void {
        let localPlayer = mobs.target(TargetSelectorKind.LocalPlayer);
        let inspectedBlock = agent.inspect(AgentInspection.Block, DOWN);
        switch(inspectedBlock){
            case YELLOW_WOOL:
                agent.destroy(DOWN);
                agent.collect(YELLOW_WOOL);
                agent.setSlot(1);
                agent.place(DOWN);
                break;
            case RED_WOOL:
                agent.destroy(DOWN);
                agent.collect(RED_WOOL);
                agent.setSlot(1);
                agent.place(DOWN);
                break;
            case GREEN_WOOL:
                mobs.give(localPlayer, IRON_SHOVEL, 1);
                agent.destroy(DOWN);
                agent.collect(GREEN_WOOL);
                agent.setSlot(1);
                agent.place(DOWN);
                break;
            case BLUE_WOOL:
                mobs.give(localPlayer, IRON_HOE, 1);
                agent.destroy(DOWN);
                agent.collect(BLUE_WOOL);
                agent.setSlot(1);
                agent.place(DOWN);
                break;
        }
    }

    //% block="Pickaxe and diamond under agent"
    export function pickaxe_and_diamond_under_agent(): boolean{
        let inspectedBlock = agent.inspect(AgentInspection.Block, DOWN);
        if(inspectedBlock == PURPLE_WOOL){
            return true;
        }else{
            return false;
        }
    }

    //% block="Collect pickaxe and diamond"
    export function collect_pickaxe_and_diamond(): void {
        let localPlayer = mobs.target(TargetSelectorKind.LocalPlayer);
        agent.destroy(DOWN);
        agent.setSlot(4);
        agent.place(DOWN);
        agent.collect(PURPLE_WOOL);
        mobs.give(localPlayer, IRON_PICKAXE, 1);
        mobs.give(localPlayer, DIAMOND, 1);
    }

    //% block="Turn 360 degrees"
    export function turn_360_degrees(): void{
        agent.turnLeft();
        agent.turnLeft();
        agent.turnLeft();
        agent.turnLeft();
    }

    //% block="No ironblock under agent"
    export function no_ironblock_under_agent(): boolean {
        let inspectedBlock = agent.inspect(AgentInspection.Block, DOWN);
        if (inspectedBlock != IRON_BLOCK) {
            return true;
        } else {
            return false;
        }
    }

    //% block="Is block %block=block under agent"
    //% block.shadow=minecraftBlock
    export function test_for_block_under_agent(block: number): boolean {
        return blocks.testForBlock(block, agent.getPosition().add(world(0, -1, 0)))
    }
    
    //% block="Bamboo next to agent"
    export function next_to_bamboo(): boolean {
        let inspectedLeftBlock = agent.inspect(AgentInspection.Block, LEFT);
        let inspectedRightBlock = agent.inspect(AgentInspection.Block, RIGHT);
        if(inspectedLeftBlock == BAMBOO || inspectedRightBlock == BAMBOO){
            return true;
        }else{
            return false;
        }
    }

    //% block="Bush next to agent"
    export function next_to_bush(): boolean {
        let inspectedLeftBlock = agent.inspect(AgentInspection.Block, LEFT);
        let inspectedRightBlock = agent.inspect(AgentInspection.Block, RIGHT);
        if(inspectedLeftBlock == AZALEA || inspectedRightBlock == AZALEA){
            return true
        }else{
            return false;
        }
    }

    //% block="Tree next to agent"
    export function next_to_tree(): boolean {
        let inspectedLeftBlock = agent.inspect(AgentInspection.Block, LEFT);
        let inspectedRightBlock = agent.inspect(AgentInspection.Block, RIGHT);
        if (inspectedLeftBlock == LOG_SPRUCE || inspectedRightBlock == LOG_SPRUCE) {
            return true
            let localPlayer = mobs.target(TargetSelectorKind.LocalPlayer);
            mobs.give(localPlayer, inspectedLeftBlock, 1);
        } else {
            return false;
        }
    }

    //% block="Fence in front of agent"
    export function fence_infrontof_agent(): boolean {
        let inspectedBlock = agent.inspect(AgentInspection.Block, FORWARD);
        if(inspectedBlock == JUNGLE_FENCE){
            return true;
        }else{
            return false;
        }
    }

    //% block="Torch in front of agent"
    export function torch_infrontof_agent(): boolean {
        let inspectedBlock = agent.inspect(AgentInspection.Block, FORWARD);
        if (inspectedBlock == TORCH) {
            return true;
        } else {
            return false;
        }
    }

    //% block="Spawn ocelot"
    export function spawn_ocelot(): void {
        agent.setSlot(1);
        agent.place(DOWN);
    }

    //% block="Spawn parrot"
    export function spawn_parrot(): void {
        agent.setSlot(2);
        agent.place(DOWN);
    }

    //% block="Spawn panda"
    export function spawn_panda(): void {
        agent.setSlot(1);
        agent.place(DOWN);
    }

    //% block="Plant tree"
    export function place_tree(): void {
        agent.setSlot(1);
        agent.place(DOWN);
    }

    //% block="Plant bush"
    export function place_bush(): void {
        agent.setSlot(2);
        agent.place(DOWN);
    }

    //% block="Replace block under agent with cobblestone"
    export function place_cobblestone(): void {
        agent.destroy(DOWN);
        agent.setSlot(3);
        agent.place(DOWN);
        agent.collect(MAGMA_BLOCK);
    }

    //% block="Replace block under agent with podzol"
    export function place_podzol(): void {
        agent.destroy(DOWN);
        agent.setSlot(3);
        agent.place(DOWN);
        agent.collect(COBBLESTONE);
    }

    //% block="Setup"
    export function setup_level1(): void {
        agent.teleport(world(-73, 69, 272), WEST);
        agent.setItem(STONE, 64, 1);
    }

    //% block="Setup"
    export function setup_level2(): void {
        agent.setItem(JUNGLE_SAPLING, 64, 1);
        agent.setItem(SWEET_BERRIES, 64, 2);
        agent.setItem(REDSTONE_BLOCK, 1, 3);
        agent.setSlot(3);
        agent.teleport(world(-110, 70, 282), EAST);
        agent.place(FORWARD);
        agent.teleport(world(-111, 69, 272), WEST);
    }

    //% block="Setup"
    export function setup_level3(): void {
        agent.teleport(world(-132, 69, 286), EAST);
        agent.setItem(REDSTONE_BLOCK, 2, 4);
        agent.setSlot(4);
        agent.place(FORWARD);
        agent.teleport(world(-135, 69, 286), EAST);
        agent.setSlot(4);
        agent.place(FORWARD);
        agent.teleport(world(-133, 68, 265), WEST);
        agent.setItem(SPAWN_PANDA, 64, 1);
        agent.setItem(SWEET_BERRIES, 64, 2);
        agent.setItem(COBBLESTONE, 64, 3);
    }

    //% block="Setup"
    export function setup_level4(): void {
        agent.teleport(world(-162, 67, 291), WEST);
        agent.setItem(REDSTONE_BLOCK, 1, 4);
        agent.setSlot(4);
        agent.place(FORWARD);
        agent.teleport(world(-161, 62, 261), WEST);
        agent.setItem(SPAWN_OCELOT, 64, 1);
        agent.setItem(SPAWN_PARROT, 64, 2);
    }

    //% block="Setup"
    export function setup_level5(): void {
        agent.teleport(world(-255, 67, 245), SOUTH);
        agent.setItem(REDSTONE_BLOCK, 1, 5);
        agent.setSlot(4);
        agent.place(FORWARD);
        agent.teleport(world(-226, 65, 244), NORTH);
        agent.setItem(SPAWN_PANDA, 64, 1);
        agent.setItem(SPAWN_PARROT, 64, 2);
        agent.setItem(PODZOL, 64, 3);
        agent.setItem(STONE, 64, 4);
    }
}