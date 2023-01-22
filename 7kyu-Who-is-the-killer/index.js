/*
Description:
Some people have been killed!
You have managed to narrow the suspects down to just a few. 
Luckily, you know every person who those suspects have seen on the day of the murders.
Given a dictionary with all the names of the suspects and everyone that they 
have seen on that day which may look like this:
{'James': ['Jacob', 'Bill', 'Lucas'],
 'Johnny': ['David', 'Kyle', 'Lucas'],
 'Peter': ['Lucy', 'Kyle']}
 and also a list of the names of the dead people:
 ['Lucas', 'Bill']
 return the name of the one killer, in our case 'James' because he is 
 the only person that saw both 'Lucas' and 'Bill'
*/

// Мое решение: 
function killer(suspectInfo, dead) {
	for (let key in suspectInfo) {
		let killer = []
		let suspect = suspectInfo[key].join();
		dead.forEach(element => {
			if (suspect.includes(element)) killer.push(key)
		});
		if (killer.length === dead.length) return key
	}
}


// самый умный ответ:
// function killer(suspectInfo, dead) {
// 	return Object.keys(suspectInfo).find(x => dead.every(y => suspectInfo[x].includes(y)))
//  }