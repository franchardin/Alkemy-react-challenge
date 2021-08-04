const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

function getPosts(){
    const postsDirectory = path.join(process.cwd(), 'posts')
    const fileNames = fs.readdirSync(postsDirectory)
    const posts = fileNames.map(fileName => {
        const id = fileName.replace(/\.md$/,'')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)
        return {
            id,
            name: matterResult.data.name
        }
    })
    return JSON.stringify(posts)
}

const fileContents = `export const posts =${getPosts()}`

try {
    fs.readdirSync('cache')
} catch(e) {
    fs.mkdirSync('cache')
}

fs.writeFile('cache/data.js', fileContents, function(err){
    if (err) return console.log(err)
    console.log('Posts cached')
})