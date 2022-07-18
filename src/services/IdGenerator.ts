import { v4 } from 'uuid'


export class idGenerator {
    generate(): string {
        return v4()
    }
}
