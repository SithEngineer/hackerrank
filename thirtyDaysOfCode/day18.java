public class Solution {
    private final Stack<Character> stack;
    private final Queue<Character> queue;
    
    public Solution() {
        stack = new Stack<>();
        queue = new LinkedList<>();
    }
    
    public void pushCharacter(char c){
        stack.push(c);        
    }
    
    public void enqueueCharacter(char c) {
        queue.add(c);
    }
    
    public char popCharacter() {
        return stack.pop();
    }
    
    public char dequeueCharacter() {
        return queue.remove();
    }

    //...
}