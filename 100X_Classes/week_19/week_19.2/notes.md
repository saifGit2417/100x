queues
pub subs
redis


need of queues > consider we are building leet code from scracth and we have an EC2 instance taking this submission 
but what if 20 people submit at same time
to handle this we use queues so all user will wait in queue and each response will get evaluated one by one , EC2 will pick up task and submission one by one


docker 


how to run redis locally using docker
run docker in interactive mode
how to set and get values in redis



here in this class we hev two folder 
1- express folder
2- worker folder

1- express folder
here we are using redis ques to push thing into here
using l push 
we will pushing thing from left of queue and worker will bring things from right of th queue


2 - worker folder
from here redis worker will pick up things from right hand side of the queue
that means first come first serve basis
even worker are down it will pick up all task which are thre in queue once it came live