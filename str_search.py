ms=input().split()
pat=input().split()
i=0
j=0
qm=False
while(j<len(pat)):
    if(ms[i]==pat[j] or pat[j]=='*'):
        i+=1
        j+=1
    elif(pat[j]=='?'):
        qm=True
        j+=1
        continue
    else:
        for x in range(i,len(ms)):
            if ms[x]==pat[j] and qm:
                