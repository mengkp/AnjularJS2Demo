#[(ngModel)] :
使用数据双向绑定[(ngModel)]的时候，需要在你的根模块导入FormsModule
```
import {FormsModule} from '@angular/forms';
@NgModule({
    imports:      [ FormsModule ],
    declarations: [ AppComponent],
    bootstrap:    [ AppComponent],
    providers: []
})
```