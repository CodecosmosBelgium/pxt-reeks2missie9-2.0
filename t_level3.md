### @hideIteration true
### @flyoutOnly true
# level 3
```blocks
player.onChat("level3", function () {
    CodeCosmos.setup_level3()
    
    }
})

```

```template
player.onChat("level3", function () {
    CodeCosmos.setup_level3()
    if(CodeCosmos.test_for_block_under_agent(GRASSBLOCK) && next_to_bamboo_plant()){
        CodeCosmos.spawn_panda();
    }else if(CodeCosmos.test_for_block_under_agent(MAGMA){
        CodeCosmos.place_cobblestone();
    }else{
        CodeCosmos.place_bush();
    }
})
```

## Level 3

Use the learning platform to solve the exercise.
