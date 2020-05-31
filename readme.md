# FaaS - ipify-clone

## 學習網站
- [Rebuilding the ipify service to demonstrate Vercel's serverless functions - DEV](https://dev.to/kallmanation/rebuilding-the-ipify-service-to-demonstrate-vercel-s-serverless-functions-1k9g)
- [Vercel](https://vercel.com/)


## API 端點
- 返回 ip as plain text
- 返回 ip in json, `{ "ip": "255.255.255.255" }`
- 返回 ip in jsonp 和客製化 callback, `userSuppliedCallback({ "ip": "255.255.255.255" })`

## Demo
- [ipify clone HOMEPAGE](https://ipify-clone-1vhuvfayz.now.sh/)
- [ipify plain text IP endpit](https://ipify-clone.re4388.now.sh/api/text)
- [ipify json IP endpit](https://ipify-clone.re4388.now.sh/api/json)
- [ipify jsonp & cb IP endpit](https://ipify-clone.re4388.now.sh/api/jsonp/TypeWhatYouLike)


## 學習點
- 在Vercel上部屬serverless functions
- 要裝Vercel CLI 下指令登入
- 要去Vercel網站登入選定的Github repo, 之後就可以自動部屬


