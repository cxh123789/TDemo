 var bio = {
 	"name" : "褚翔鸿",
 	"role" : "Web Developer",
 	"contacts" : {
 		"mobile" : "13969169232",
 		"email" : "cxh2921@gmail.com",
 		"github" : "cxh123789",
 		"location" : "山东 济南"
 	},
 	"welcomeMessage" : "Hello.",
 	"skills" : [
 	"Good leader", "soft skills", "Adaptability", "Collaboration", "Time management"
 	],
 	"biopic" : "images/褚翔鸿_conew1.jpg"
 };
console.log(bio.name);
var boo = {
	name : "tomg"
}
console.log(boo.name);
import java.util.Arrays;//必须加载
class Demo{
    public static void main(String []args){
        int[] arr={3,54,456,342,2798};
        System.out.println(Arrays.toString(arr));//java打印数组，排序前[3, 54, 456, 342, 2798]
        arrSort(arr);
        System.out.println(Arrays.toString(arr));//排序后 [2798, 456, 342, 54, 3]
    }

    /**
     * 数组降序排序
     * @param arr
     */
    public static void arrSort(int[]arr){
        for(int i=0;i<arr.length-1;i++){
            for(int j=i+1;j<arr.length;j++){
                if(arr[j]>arr[i]){
                    int temp=arr[i];
                    arr[i]=arr[j];
                    arr[j]=temp;
                }
            }
        }
    }
}