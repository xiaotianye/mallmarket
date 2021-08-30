import {request} from './request.js'

export function GetNavData(){
  return request({
    url: '/home/multidata'
  })
}