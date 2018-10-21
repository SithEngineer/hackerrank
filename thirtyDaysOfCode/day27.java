static class TestDataEmptyArray {
    public static int[] get_array() {
        return new int[0];
    }
}

static class TestDataUniqueValues {
    public static int[] get_array() {
        int[] data = new int[10];
        for(int i=0;i<data.length;++i){
            data[i]=i;
        }
        return data;
    }

    public static int get_expected_result() {
        return 0;
    }
}

static class TestDataExactlyTwoDifferentMinimums {
    public static int[] get_array() {
        int[] data = new int[10];
        int half = data.length/2;
        for(int i=0;i<half;++i){
            data[i]=i;
            data[i + half]=i;
        }
        return data;
    }

    public static int get_expected_result() {
        return 0;
    }
}