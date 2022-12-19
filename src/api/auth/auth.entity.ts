import {
    BaseEntity,
    BeforeInsert,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from 'typeorm';
import bcrypt from 'bcrypt';
@Entity()
export class Auth extends BaseEntity {
    @PrimaryGeneratedColumn()
    sid: number;
    @Column('varchar', { comment: 'userEmail', length: 256 })
    email: string;
    @Column('varchar', { comment: 'userPassword', length: 512 })
    pwd: string;
    @Column('varchar', { comment: 'userName', length: 128 })
    username: string;
    @Column('datetime', { comment: 'CreateAt' })
    sub_date: Date;
    @BeforeInsert()
    async saveEncryptedPassword() {
        this.pwd = await bcrypt.hash(this.pwd, 5);
    }
    async comparePassword(pwd: string): Promise<boolean> {
        if (!(await bcrypt.compare(pwd, this.pwd))) {
            throw 'Compare Error';
        }
        return await bcrypt.compare(pwd, this.pwd);
    }
}