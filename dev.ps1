$nodePath = "C:\Users\Lenovo\AppData\Local\nvm\v20.19.6"
if (Test-Path $nodePath) {
    $env:Path = "$nodePath;$env:Path"
}
npm run dev

