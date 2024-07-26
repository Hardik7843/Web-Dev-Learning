Object Oriencted Programming in JavaScript
## Ways to Create Objects
### 1. Using Literals
```
const hardik = {
            firstName : "Hardik",
            lastName : "Prajapati",
            age : 50,
            eyeColor : "blue",
            draw: function a(param) {
                console.log(param)

            }
        }
console.log(hardik);
```

### Output
```
{firstName: 'Hardik', lastName: 'Prajapati', age: 50, eyeColor: 'blue', draw: ƒ}
```

### 2.Using Constructors
```
function ConstructHardik()
        {
            this.firstName = "Hardik",
            this.lastName  = "Prajapati",
            this.age  = 50,
            this.eyeColor  = "blue",
            this.draw = function a(param) {
                console.log(param)
            }
        }

        let hardik3 = new ConstructHardik();
        console.log(hardik3);
```

### Output
```
ConstructHardik {firstName: 'Hardik', lastName: 'Prajapati', age: 50, eyeColor: 'blue', draw: ƒ}
```

### 3. Factory Functions
```
function CreateHardik()
        {
            return {
                firstName : "Hardik",
                lastName : "Prajapati",
                age : 50,
                eyeColor : "blue",
                draw: function a(param) {
                    console.log(param)
    
                }
            }
        }

        let hardik2 = CreateHardik();
        console.log(hardik2); 
```

### Output
```
{firstName: 'Hardik', lastName: 'Prajapati', age: 50, eyeColor: 'blue', draw: ƒ}
```

# Conclusion 
## Developers don't use Literals.
## Developers use either Constructors or Factory Funtions.
#### Note : While creating objects with constructors. one should always use `new` keyword. else all variables and properties will be set to window property.




