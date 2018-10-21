class Student extends Person{
    private int[] testScores;
    public Student(String firstName, String lastName, int id, int[] testScores) {
        super(firstName, lastName, id);
        this.testScores = testScores;
    }
    
    public char calculate() {
        if(testScores == null || testScores.length == 0) return 'T';
        int avg = 0;
        for(int i=0; i<testScores.length ; ++i) {
            avg += testScores[i];
        }
        avg /= testScores.length;
        if(avg>=90){
            return 'O';
        } else if(avg>=80){
            return 'E';
        } else if(avg>=70){
            return 'A';
        } else if(avg>=55){
            return 'P';
        } else if(avg>=40){
            return 'D';
        } else {
            return 'T';
        }
    }
}