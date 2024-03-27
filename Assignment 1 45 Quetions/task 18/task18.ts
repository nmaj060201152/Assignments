var a:string[] = ["Makkah", "Madina", "London", "Mumbai", "Goa"]
console.log("\n\nMy Favourite Places are\n. "+a[0]+"\n. "+a[1]+"\n. "+a[2]+"\n. "+a[3]+"\n. "+a[4])

var b=[...a].sort()
// var b=a.sort().....in this case a[] will also be sorted
console.log("\n\nMy Favourite Places in Alphabatical Order are\n. "+b[0]+"\n. "+b[1]+"\n. "+b[2]+"\n. "+b[3]+"\n. "+b[4])
console.log("\n\nStill I have list of my favourite places in orignal order\n. ")

console.log("\n\nMy Favourite Places unordered list is as follows\n. "+a[0]+"\n. "+a[1]+"\n. "+a[2]+"\n. "+a[3]+"\n. "+a[4])

var c=[...a].reverse()
console.log("\n\nMy Favourite Places reverse ordered list is as follows, without changing the order of the orignal list\n. "+c[0]+"\n. "+c[1]+"\n. "+c[2]+"\n. "+c[3]+"\n. "+c[4])

var d=[...c].reverse()
console.log("\n\nby reversing again i got the unordered list again as follows, without changing the order of the orignal list\n. "+d[0]+"\n. "+d[1]+"\n. "+d[2]+"\n. "+d[3]+"\n. "+d[4])

a.sort()
console.log("\n\nMy list is sorted now in alphabatical order\n. "+a[0]+"\n. "+a[1]+"\n. "+a[2]+"\n. "+a[3]+"\n. "+a[4])

a.reverse()
console.log("\n\nby reversing alphabatically ordered list i got reverse alphabatically ordered list\n. "+a[0]+"\n. "+a[1]+"\n. "+a[2]+"\n. "+a[3]+"\n. "+a[4])
