const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

// fetch => promise
// fetch는 get이 default임
// fetch는 parse기능이 내장되어 있는데 그것을 사용해 나온 결과 값은 json에 위치함

const defaultOptions={
  method:'GET',
    body: null,
    headers:{
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'*'
    }
}

export const tiger  = async (options) => {
  
  const {url, ...restOptions} = {
    ...defaultOptions, 
    ...options,
    headers:{
      ...defaultOptions.headers,
      ...options.headers
    }
  }

  const response = await fetch(url, restOptions);

  if(response.ok === true){
    response.data = await response.json();
  }

  return response;
}

let result = await tiger({url:ENDPOINT});

// console.log(result)

tiger.get = (url,options) => {
  return tiger({
    url,
    ...options
  })
}


tiger.post = (url,body,options) => {
   return tiger({
    method:'POST',
    url,
    ...options,
    body:JSON.stringify(body)
   })
}


tiger.delete = (url,options) => {
  return tiger({
    method:'DELETE',
    url,
    ...options
  })
}


tiger.put = (url,body,options) => {
  return tiger({
    method:'PUT',
    url,
    ...options,
    body:JSON.stringify(body)
  })
}


tiger.patch = (url,body,options) => {
  return tiger({
    method:'PATCH',
    url,
    ...options,
    body:JSON.stringify(body)
  })
}