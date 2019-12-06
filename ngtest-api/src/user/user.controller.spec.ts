import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('Users Controller', () => {
	let userController: UserController;
	let userService: UserService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [UserController],
			providers: [UserService]
		}).compile();

		userService = module.get<UserService>(UserService);
		userController = module.get<UserController>(UserController);
	});

	it('should be defined', () => {
		expect(userController).toBeDefined();
	});

	describe('findAll', () => {
		it('should return an array of users', async () => {
			const result = [{id: 1, name: 'giorgio'}];
			jest.spyOn(userService, 'findAll').mockImplementation(() => Promise.resolve(result));
			expect(await userController.findAll()).toBe(result);
		});

	});
});
