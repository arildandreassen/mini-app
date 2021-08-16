COMMENTS:

1. Clearifying the requirements for the extra food:
   Based on the expected `363.6 lbs` answer to 5 small, 3 medium and 7 large dogs, with 17 lbs in left over food, that is only reachable given the current calculation:
   `minimumFoodRequired` - `leftOverFood` + (( `minimumFoodRequired` - `leftOverFood`) \* `20%` )

   This means we are calculating the extra 20% food based on the amount of food we are purchasing, rather than the amount consumed.

   This would give us the following equation
   minimumFoodRequired = (`5*10` + `3*20` + `7*30`) = 320 lbs
   leftOverFood = 17 lbs
   extra = 20%

   320 - 17 + 303x0.2 = 363.3

   However, this then rely on the previous week's leftover whether you have enough.
   If you have no left over food, you get:

   320 + 320x0.2 = 384

   The reverse is also true:

   - No left over food from previous month, you purchae 320lb + 20% = 384
   - Next month the shelter is quarantined, and no dogs can stay or eat much of the food. They only eat 64 lbs
   - This month you now have 320 lbs of left over and since you don't need to purchase anything, then you aren't getting any extra food either. You have exact 320 lbs

   320 - 320 +0x0.2 = 0 lbs

   However, if you purchase the extra food based on consumption, you would get

   320-320 + 320x0.2 = 64 lbs
   320-200 + 320x0.2 = 184 lbs

   The shelter would always have a consistent amount of food based on amount of dogs

2. Since our requirement stats `363.3 lbs` we will assume we should calculate to the closest single decimal
