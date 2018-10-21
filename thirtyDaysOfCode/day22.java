public static int getHeight(Node root){
    if(root.left == null && root.right == null) {
        return 0;
    }
    
    int left = 0;
    if(root.left!=null) {
        left = getHeight(root.left) + 1;
    }
    
    int right = 0;
    if(root.right!=null) {
        right = getHeight(root.right) + 1;
    }
    
    return left>right ? left : right;
}