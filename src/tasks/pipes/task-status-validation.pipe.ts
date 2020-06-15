import { PipeTransform, BadRequestException } from "@nestjs/common";
import { TaskStatus } from "../task-status.enum";

export class TaskStatusValidationPipe implements PipeTransform {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    transform(value: any) {
        value = value.toUpperCase();
        if (!this.isStatusValid(value)) {
            throw new BadRequestException(`${value} is an invalid status.`);
        }
        return value;
    }

    private isStatusValid(status: any) {
        return Object.values(TaskStatus).indexOf(status) !== -1;
    }
}