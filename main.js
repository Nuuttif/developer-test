class Graph {
 
    constructor(vertices) {
        this.vertices = vertices;
         
        this.graph = new Array(vertices);
        for (let i = 0; i < vertices; i++) {
            this.graph[i] = new Array();
        }
    }
         
    addEdge(v, w) {
        this.graph[v].push(w);
        this.graph[w].push(v);     
    }

    isCyclicUtil(v, visited, parent) {
        visited[v] = true;
 
        for(let i = 0; i < this.graph[v].length; i++) {
            if (!visited[this.graph[v][i]]) {
                if (this.isCyclicUtil(this.graph[v][i], visited, v)) {
                    return true;
                }
            } else if (parent != this.graph[v][i]) {
                return true;
            }
        }
        return false;
    }
 
    isCyclic() {
        let visited = new Array(this.vertices).fill(false);
 
        for (let i = 0; i < this.vertices; i++) {
            if (!visited[i]) {
                if (this.isCyclicUtil(i, visited, -1)) {
                    return true;
                }
            }
        }
        return false;
    }
 
}
 
let graph1 = new Graph(5);
graph1.addEdge(0, 1);
graph1.addEdge(1, 2);
graph1.addEdge(2, 3);
graph1.addEdge(2, 4);
graph1.addEdge(3, 4);
 
if (graph1.isCyclic()){
    console.log("Graph contains a cycle");
} else {
    console.log("Graph doesn't contain any cycles");
}
 
let graph2 = new Graph(6);
graph2.addEdge(0, 1);
graph2.addEdge(1, 2);
graph2.addEdge(1, 3);
graph2.addEdge(3, 4);
graph2.addEdge(3, 5);
 
if (graph2.isCyclic()) {
    console.log("Graph contains a cycle");
} else {
    console.log("Graph doesn't contain any cycles");
}