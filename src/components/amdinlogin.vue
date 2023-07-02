<template>
    <div id="building">
    <div>
        <div id="he-plugin-standard"/>
    </div>
</div>
</template>
   
<script>
export default {
    created() {
        window.WIDGET = {   //这里的WIDGET  可以直接整个复制你生成的代码
            "CONFIG": {
                "layout": "1",
                "width": "450",
                "height": "150",
                "background": "1",
                "dataColor": "FFFFFF",
                "borderRadius": "20",
                "key": "92280da0289446db828775d4621454c2"
            }
        }
        var script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = 'https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0'
        document.getElementsByTagName('head')[0].appendChild(script)
    }
}
</script>
   
<style>
.created {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, .5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, .6);
  border-radius: 10px;
}</style>
