const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

delay(1000).then(() => {
  console.log('done')
})

// reject1 catch1 then1
