### @hideIteration true
### @flyoutOnly true
# level 5
```blocks
player.onChat("level5", function () {
    CodeCosmos.setup_level5()
    
    }
})

```

```template
player.onChat("level5", function () {
    CodeCosmos.setup_level5()
        if(CodeCosmos.test_for_block_under_agent(STONE)){
          CodeCosmos.place_grassblock();
        }
        if(CodeCosmos.test_for_block_under_agent(SAND)){
          CodeCosmos.spawn_parrot();
        }
        if(CodeCosmos.test_for_block_under_agent(GRASSBLOCK)) && CodeCosmos.next_to_bamboo_block()){
          CodeCosmos.spawn_panda();
        }
})
```

## Level 5

Use the learning platform to solve the exercise.
