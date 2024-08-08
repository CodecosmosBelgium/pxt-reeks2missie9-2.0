### @hideIteration true
### @flyoutOnly true
# level 4
```blocks
player.onChat("level4", function () {
    CodeCosmos.setup_level4()
    
})

```

```template
player.onChat("level4", function () {
    CodeCosmos.setup_level4()
    if(CodeCosmos.test_for_block_under_agent(GRASSBLOCK) && CodeCosmos.next_to_bush()){
        CodeCosmos.spawn_ocelot();
    }else if(CodeCosmos.next_to_tree() && CodeCosmos.not_on_iron()){
        CodeCosmos.spawn_parrot();
    }else if(CodeCosmos.fence_infrontof_agent()){
        agent.turn(LEFT);
    }else if(CodeCosmos.torch_infrontof_agent()){
        agent.turn(RIGHT);
    }else{
        for(let i = 0; i < 4; i++){
          agent.turn(LEFT)
        }
    }
})
```

## Level 4

Use the learning platform to solve the exercise.
