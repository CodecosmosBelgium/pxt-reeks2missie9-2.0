### @hideIteration true
### @flyoutOnly true
# level 2
```blocks
player.onChat("level2", function () {
    CodeCosmos.setup_level2()
    
    }
})

```

```template
player.onChat("level2", function () {
    CodeCosmos.setup_level2()
      if (CodeCosmos.test_for_block_under_agent(GRASSBLOCK) || CodeCosmos.test_for_block_under_agent(PODZOL)){
          CodeCosmos.plant_tree();
      }else{
          CodeCosmos.plant_bush();
})
```

## Level 2

Use the learning platform to solve the exercise.
