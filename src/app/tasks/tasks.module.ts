import { NgModule } from "@angular/core";
import { TasksComponent } from "./tasks.component";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations: [TasksComponent,TaskComponent,NewTaskComponent],
    exports: [TasksComponent],
    imports: [CommonModule, SharedModule, TasksModule]
})

export class TasksModule {}