   public int solution(int n) {
        int answer = 0;

        int cntN = Integer.bitCount(n);

        int cntA = 0;
        
        while(true){
            n++;
            cntA = Integer.bitCount(n);
            if(cntN == cntA){
                answer = n;
                break;
            }
        }

        return answer;
    }
}
