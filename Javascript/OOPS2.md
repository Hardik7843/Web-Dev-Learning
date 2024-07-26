# Changing the object's parameters. 

```
function Hardik(weight){
    this.height = "5'6''";
    this.weight = weight;
    return this;
}

const h = new Hardik(52.6);
h.weight = 53.6;
h['weight'] = 52;
console.log(h)
```
### Output
```
Hardik {height: "5'6''", weight: 52}
```

# Deleting some parameters
```
delete h.height;
console.log(h);
```

### Output
```
Hardik {weight: 52}
```
