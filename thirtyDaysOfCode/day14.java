public Difference(int[] elements){
    this.elements = elements;
    this.maximumDifference = 0;
}

public void computeDifference() {
    for(int i=0;i<elements.length ; ++i) {
        for(int j=i+1 ; j<elements.length ; ++j) {
            if(j>=elements.length) break;
            int diff = Math.abs(elements[i] - elements[j]);
            if( diff > maximumDifference) {
                maximumDifference = diff;
            }
        }
    }
}