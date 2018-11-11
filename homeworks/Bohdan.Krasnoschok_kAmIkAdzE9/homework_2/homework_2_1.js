let N = 15; //U can change N
let str = " ";
let str2 = "##";
for(let i = 0; i < N; i++) 
{
	Console.log(str.repeat(N - i) + str2.repeat(i + 2));
}