class Data { // Use wisely, or things inside such as tables or dictionaries will break.
    tables = [];
    /**
     * Contained in 3 dimentions, could be used for 4D, but who cares.
     * @param lst1 {any[]}
     * @param lst2 {any[]}
     * @param lst3 {any[]}
     * @param item1 {item}
     * @param item2 {item}
     * @param item3 {item}
     * @returns boolean
     */
    contained3D(lst1, lst2, lst3, item1, item2, item3) {
        for (var i = 0; i < lst1.length; i++) {
            if (lst1[i] == item1 && lst2[i] == item2 && lst3[i] == item3)
                return true;
        }
        return false;
    }
    /**
     * Contained in 2 dimentions.
     * @param lst1 {any[]}
     * @param lst2 {any[]}
     * @param item1 {item}
     * @param item2 {item}
     * @returns boolean
     */
    contained2D(lst1, lst2, item1, item2) {
        for (var i = 0; i < lst1.length; i++) {
            if (lst1[i] == item1 && lst2[i] == item2) {
                return true;
            }
        }
        return false;
    }
    /**
     * Contained in 1 dimention.
     * @param lst {any[]}
     * @param item {item}
     * @returns boolean
     */
    contains(lst, item) {
        for (var i = 0; i < lst.length; i++) {
            if (lst[i] == item)
                return true;
        }
        return false;
    }
    /**
     * Random integer
     * @param minOrMax {number}
     * @param max {number}
     * @returns number
     */
    randInt(minOrMax, max) {
        if (minOrMax == undefined)
            return Math.round(Math.random());
        if (max == undefined)
            return Math.floor(Math.random() * minOrMax);
        return Math.floor(Math.random() * (max - minOrMax) + minOrMax);
    }
    /**
     * Contained multiple times?
     * @param lst {any[]}
     * @param item {item}
     * @returns boolean
     */
    MultiContains(lst, item) {
        let instances = 0;
        for (var i = 0; i < lst.length; i++) {
            if (lst[i] == item)
                instances++;
        }
        return instances > 1;
    }
    /**
     * 'Find' the item
     * @param lst {any[]}
     * @param item {item}
     * @returns number | null
     */
    find(lst, item) {
        for (var i = 0; i < lst.length; i++) {
            if (lst[i] == item) {
                return i;
            }
        }
        return null;
    }
    dicts = [];
    newDict() {
        this.dicts.push([]);
    }
    //Dictionary class
    dictionary(ID, item) {
        //Create a new key and value.
        let innerDict = this.dicts;
        function create(key, value) {
            innerDict[ID].push([key, value]);
        }
        //Either KEY or VALUE for what you want to get() or set()
        const KEY = '1874398024712309472398473298473290';
        const VALUE = '389140802739482137409823704927348';
        //Returns the key and/or value of the dictionary's item. Leave it blank to return both.
        function get(keyOrValue) {
            if (keyOrValue == KEY)
                return innerDict[ID][item][0];
            else if (keyOrValue == VALUE) 
                return innerDict[ID][item][1];
            else if (keyOrValue == undefined) 
                return innerDict[ID][item];
        }
        //Sets the key and/or value of the dictionary. (natural response is both)
        function set(keyOrValue, what) {
            if (keyOrValue == KEY) {
                innerDict[ID][0] = what;
            } else if (keyOrValue == VALUE) {
                innerDict[ID][1] = what;
            } else if (keyOrValue == undefined) {
                innerDict[ID] = what;
            }
        }
        this.dicts = innerDict;
        return innerDict[ID];
    }
}