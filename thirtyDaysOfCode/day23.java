static void levelOrder(Node root){
    LinkedList<Integer> results = new LinkedList<>();
    LinkedList<Node> nodes = new LinkedList<Node>();
    nodes.add(root);
    while(!nodes.isEmpty()) {
        Node current = nodes.remove();
        results.add(current.data);
        if(current.left!=null) {
            nodes.add(current.left);
        } 
        if(current.right!=null) {
            nodes.add(current.right);
        } 
    }
    for(Integer i : results) {
        System.out.print(i + " ");
    }
}