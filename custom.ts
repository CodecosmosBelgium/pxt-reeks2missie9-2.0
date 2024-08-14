player.execute("/scriptevent cc:getId " + mobs.queryTarget((mobs.target(MY_AGENT)))[0].uniqueId)

/**
 * Custom blocks
 */
//% color=190 weight=100 block="CodeCosmos"
namespace CodeCosmos {

    //% block="Raap gereedschap op"
    export function collect_tool(): void {
        let localPlayer = mobs.target(TargetSelectorKind.LocalPlayer);
        let inspectedBlock = agent.inspect(AgentInspection.Block, DOWN);
        switch(inspectedBlock){
            case YELLOW_WOOL:
                agent.destroy(DOWN);
                agent.collect(YELLOW_WOOL);
                break;
            case RED_WOOL:
                agent.destroy(DOWN);
                agent.collect(RED_WOOL);
                break;
            case GREEN_WOOL:
                mobs.give(localPlayer, IRON_SHOVEL, 1);
                agent.destroy(DOWN);
                agent.collect(GREEN_WOOL);
                break;
            case BLUE_WOOL:
                mobs.give(localPlayer, IRON_HOE, 1);
                agent.destroy(DOWN);
                agent.collect(BLUE_WOOL);
                break;
        }
    }

    //% block="Pickaxe en diamont onder agent"
    export function pickaxe_and_diamond_under_agent(): boolean{
        let inspectedBlock = agent.inspect(AgentInspection.Block, DOWN);
        if(inspectedBlock == PURPLE_WOOL){
            return true;
        }else{
            return false;
        }
    }

    //% block="Raap pickaxe en diamant op"
    export function collect_pickaxe_and_diamond(): void {
        let localPlayer = mobs.target(TargetSelectorKind.LocalPlayer);
        agent.destroy(DOWN);
        agent.setSlot(4);
        agent.place(DOWN);
        agent.collect(PURPLE_WOOL);
        mobs.give(localPlayer, IRON_PICKAXE, 1);
        mobs.give(localPlayer, DIAMOND, 1);
    }

    //% block="Draai 360 graden"
    export function turn_360_degrees(): void{
        for(let i = 0; i < 4; i++){
            agent.turnLeft();
        }
    }

    //% block="Geen ijzer block onder agent"
    export function no_ironblock_under_agent(): boolean {
        let inspectedBlock = agent.inspect(AgentInspection.Block, DOWN);
        if (inspectedBlock != IRON_BLOCK) {
            return true;
        } else {
            return false;
        }
    }

    //% block="is blok %block=block onder agent"
    //% block.shadow=minecraftBlock
    export function test_for_block_under_agent(block: number): boolean {
        return blocks.testForBlock(block, agent.getPosition().add(world(0, -1, 0)))
    }
    
    //% block="Bamboo plant naast agent"
    export function next_to_bamboo_plant(): boolean {
        let inspectedLeftBlock = agent.inspect(AgentInspection.Block, LEFT);
        let inspectedRightBlock = agent.inspect(AgentInspection.Block, RIGHT);
        if(inspectedLeftBlock == BAMBOO || inspectedRightBlock == BAMBOO){
            return true;
        }else{
            return false;
        }
    }

    //% block="Bamboo block naast agent"
    export function next_to_bamboo_block(): boolean {
        let inspectedLeftBlock = agent.inspect(AgentInspection.Block, LEFT);
        let inspectedRightBlock = agent.inspect(AgentInspection.Block, RIGHT);
        if (inspectedLeftBlock == BLOCK_OF_BAMBOO || inspectedRightBlock == BLOCK_OF_BAMBOO) {
            return true;
        } else {
            return false;
        }
    }

    //% block="Struik naast agent"
    export function next_to_bush(): boolean {
        let inspectedLeftBlock = agent.inspect(AgentInspection.Block, LEFT);
        let inspectedRightBlock = agent.inspect(AgentInspection.Block, RIGHT);
        if(inspectedLeftBlock == AZALEA || inspectedRightBlock == AZALEA){
            return true
        }else{
            return false;
        }
    }

    //% block="Boom naast agent"
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

    //% block="Hekken voor agent"
    export function fence_infrontof_agent(): boolean {
        let inspectedBlock = agent.inspect(AgentInspection.Block, FORWARD);
        if(inspectedBlock == JUNGLE_FENCE){
            return true;
        }else{
            return false;
        }
    }

    //% block="Fakkel voor agent"
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

    //% block="Spawn papegaai"
    export function spawn_parrot(): void {
        agent.setSlot(2);
        agent.place(DOWN);
    }

    //% block="Spawn panda"
    export function spawn_panda(): void {
        agent.setSlot(1);
        agent.place(DOWN);
    }

    //% block="Plant bloem"
    export function place_flower(): void {
        agent.setSlot(1);
        agent.place(DOWN);
    }

    //% block="Plant boom"
    export function place_tree(): void {
        agent.setSlot(1);
        agent.place(DOWN);
    }

    //% block="Plant struik"
    export function place_bush(): void {
        agent.setSlot(2);
        agent.place(DOWN);
    }

    //% block="Plaats keisteen"
    export function place_cobblestone(): void {
        agent.destroy(DOWN);
        agent.setSlot(3);
        agent.place(DOWN);
        agent.collect(MAGMA_BLOCK);
    }

    //% block="Plaats podzol"
    export function place_podzol(): void {
        agent.destroy(DOWN);
        agent.setSlot(3);
        agent.place(DOWN);
        agent.collect(COBBLESTONE);
    }

    //% block="Zet klaar"
    export function setup_level1(): void {
        agent.setItem(BLUE_ORCHID, 64, 1);
        agent.teleport(world(-73, 69, 272), WEST);
    }

    //% block="Zet klaar"
    export function setup_level2(): void {
        agent.setItem(JUNGLE_SAPLING, 64, 1);
        agent.setItem(SWEET_BERRIES, 64, 2);
        agent.teleport(world(-111, 69, 272), WEST);
    }

    //% block="Zet klaar"
    export function setup_level3(): void {
        agent.setItem(SPAWN_PANDA, 64, 1);
        agent.setItem(SWEET_BERRIES, 64, 2);
        agent.setItem(COBBLESTONE, 64, 3);
        agent.teleport(world(-133, 68, 265), WEST);
    }

    //% block="Zet klaar"
    export function setup_level4(): void {
        agent.setItem(SPAWN_OCELOT, 64, 1);
        agent.setItem(SPAWN_PARROT, 64, 2);
        agent.teleport(world(-161, 62, 261), WEST);
    }

    //% block="Zet klaar"
    export function setup_level5(): void {
        agent.setItem(SPAWN_PANDA, 64, 1);
        agent.setItem(SPAWN_PARROT, 64, 2);
        agent.setItem(PODZOL, 64, 3);
        agent.setItem(STONE, 64, 4);
        agent.teleport(world(-226, 65, 244), NORTH);
    }
}