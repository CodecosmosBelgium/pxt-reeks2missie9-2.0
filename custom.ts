/**
 * Custom blocks
 */
//% color=190 weight=100 block="CodeCosmos"
namespace CodeCosmos {

    //level1

    //% block="raap gereedschap op"
    export function collect_item(): void {
        let localPlayer = mobs.target(TargetSelectorKind.LocalPlayer);
        let inspectedBlock = agent.inspect(AgentInspection.Block, FORWARD + DOWN);
        if(inspectedBlock == YELLOW_WOOL){
            mobs.give(localPlayer, YELLOW_WOOL, 1);
        }else if(inspectedBlock == RED_WOOL){
            mobs.give(localPlayer, RED_WOOL, 1);
        }else if(inspectedBlock == GREEN_WOOL){
            mobs.give(localPlayer, GREEN_WOOL, 1);
        }else if(inspectedBlock == BLUE_WOOL){
            mobs.give(localPlayer, BLUE_WOOL, 1);
        }
    }

    //% block="Plant bloem"
    export function place_flower(): void {
        agent.setSlot(1);
        agent.place(DOWN);
    }

    //% block="Zet klaar"
    export function setup_1(): void {
        agent.setItem(BLUE_ORCHID, 64, 1)
        agent.teleport(world(-73, 69, 267), SOUTH)
        blocks.fill(AIR, world(247, 74, 43), world(222, 74, 43), FillOperation.Replace)
    }


    //level2

    //% block="is blok %block=block onder agent"
    //% block.shadow=minecraftBlock
    export function test_for_block_under_agent(block: number): boolean {
        return blocks.testForBlock(block, agent.getPosition().add(world(0, -1, 0)))
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

    //% block="Zet klaar"
    export function setup_2(): void {
        agent.setItem(JUNGLE_SAPLING, 64, 1)
        agent.setItem(SWEET_BERRIES, 64, 2)
        agent.teleport(world(-111, 69, 272), SOUTH)
        blocks.fill(AIR, world(247, 74, 43), world(222, 74, 43), FillOperation.Replace)
    }


    //level3

    //% block="Bamboo naast agent"
    export function next_to_bamboo(): boolean {
        let inspectedLeftBlock = agent.inspect(AgentInspection.Block, LEFT);
        let inspectedRightBlock = agent.inspect(AgentInspection.Block, RIGHT);
        if(inspectedLeftBlock == BAMBOO || inspectedRightBlock == BAMBOO){
            return true;
        }else{
            return false;
        }
    }

    //% block="Spawn panda"
    export function spawn_panda(): void{
        agent.setSlot(1);
        agent.place(DOWN);
    }

    //% block="Plaats cobblestone"
    export function place_cobblestone(): void {
        agent.destroy(DOWN);
        agent.setSlot(3);
        agent.place(DOWN);
    }

    //% block="Zet klaar"
    export function setup_3(): void {
        agent.setItem(SPAWN_PANDA, 64, 1)
        agent.setItem(SWEET_BERRIES, 64, 2)
        agent.setItem(COBBLESTONE, 64, 3)
        agent.teleport(world(-133, 68, 265), SOUTH)
        blocks.fill(AIR, world(247, 74, 43), world(222, 74, 43), FillOperation.Replace)
    }


    //level4

    //% block="Struik naast agent"
    export function next_to_bush(): boolean {
        let inspectedLeftBlock = agent.inspect(AgentInspection.Block, LEFT);
        let inspectedRightBlock = agent.inspect(AgentInspection.Block, RIGHT);
        if(inspectedLeftBlock == SWEET_BERRIES || inspectedRightBlock == SWEET_BERRIES){
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
        } else {
            return false;
        }
    }

    //% block="Spawn ocelot"
    export function spawn_ocelot(): void {
        agent.setSlot(1)
        agent.place(DOWN);
    }

    //% block="Spawn papegaai"
    export function spawn_parrot(): void {
        agent.setSlot(2)
        agent.place(DOWN);
    }

    //% block="Hekken voor agent"
    export function fence_infrontof_agent(): boolean {
        let inspectedBlock = agent.inspect(AgentInspection.Block, FORWARD)
        if(inspectedBlock == JUNGLE_FENCE){
            return true;
        }else{
            return false;
        }
    }

    //% block="Fakkel voor agent"
    export function torch_infrontof_agent(): boolean {
        let inspectedBlock = agent.inspect(AgentInspection.Block, FORWARD)
        if (inspectedBlock == TORCH) {
            return true;
        } else {
            return false;
        }
    }

    //% block="Zet klaar"
    export function setup_4(): void {
        agent.setItem(SPAWN_OCELOT, 64, 1)
        agent.setItem(SPAWN_PARROT, 64, 2)
        agent.teleport(world(-133, 68, 265), SOUTH)
        blocks.fill(AIR, world(247, 74, 43), world(222, 74, 43), FillOperation.Replace)
    }


    //level5


}